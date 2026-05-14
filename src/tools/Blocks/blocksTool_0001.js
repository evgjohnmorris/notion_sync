/**
 * Generated Tool: blocksTool_0001
 * Domain: Blocks
 * ID: 0001
 */
exports.blocksTool_0001 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0001:', error);
    throw error;
  }
};
