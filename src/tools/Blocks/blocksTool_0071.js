/**
 * Generated Tool: blocksTool_0071
 * Domain: Blocks
 * ID: 0071
 */
exports.blocksTool_0071 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0071:', error);
    throw error;
  }
};
