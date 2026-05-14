/**
 * Generated Tool: blocksTool_0983
 * Domain: Blocks
 * ID: 0983
 */
exports.blocksTool_0983 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0983:', error);
    throw error;
  }
};
