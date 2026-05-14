/**
 * Generated Tool: blocksTool_0906
 * Domain: Blocks
 * ID: 0906
 */
exports.blocksTool_0906 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0906:', error);
    throw error;
  }
};
