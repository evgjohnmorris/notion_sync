/**
 * Generated Tool: blocksTool_0473
 * Domain: Blocks
 * ID: 0473
 */
exports.blocksTool_0473 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0473:', error);
    throw error;
  }
};
