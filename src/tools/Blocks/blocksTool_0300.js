/**
 * Generated Tool: blocksTool_0300
 * Domain: Blocks
 * ID: 0300
 */
exports.blocksTool_0300 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0300:', error);
    throw error;
  }
};
