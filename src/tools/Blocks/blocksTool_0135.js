/**
 * Generated Tool: blocksTool_0135
 * Domain: Blocks
 * ID: 0135
 */
exports.blocksTool_0135 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0135:', error);
    throw error;
  }
};
