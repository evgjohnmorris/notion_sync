/**
 * Generated Tool: blocksTool_0526
 * Domain: Blocks
 * ID: 0526
 */
exports.blocksTool_0526 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0526:', error);
    throw error;
  }
};
