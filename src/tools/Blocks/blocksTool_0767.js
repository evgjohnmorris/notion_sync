/**
 * Generated Tool: blocksTool_0767
 * Domain: Blocks
 * ID: 0767
 */
exports.blocksTool_0767 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0767:', error);
    throw error;
  }
};
