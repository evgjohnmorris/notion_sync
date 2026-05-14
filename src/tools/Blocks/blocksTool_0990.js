/**
 * Generated Tool: blocksTool_0990
 * Domain: Blocks
 * ID: 0990
 */
exports.blocksTool_0990 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0990:', error);
    throw error;
  }
};
