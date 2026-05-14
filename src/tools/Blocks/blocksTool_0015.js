/**
 * Generated Tool: blocksTool_0015
 * Domain: Blocks
 * ID: 0015
 */
exports.blocksTool_0015 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0015:', error);
    throw error;
  }
};
