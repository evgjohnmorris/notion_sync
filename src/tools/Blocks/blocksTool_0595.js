/**
 * Generated Tool: blocksTool_0595
 * Domain: Blocks
 * ID: 0595
 */
exports.blocksTool_0595 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0595:', error);
    throw error;
  }
};
