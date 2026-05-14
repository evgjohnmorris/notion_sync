/**
 * Generated Tool: blocksTool_0547
 * Domain: Blocks
 * ID: 0547
 */
exports.blocksTool_0547 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0547:', error);
    throw error;
  }
};
