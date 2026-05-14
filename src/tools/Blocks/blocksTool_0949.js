/**
 * Generated Tool: blocksTool_0949
 * Domain: Blocks
 * ID: 0949
 */
exports.blocksTool_0949 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0949:', error);
    throw error;
  }
};
