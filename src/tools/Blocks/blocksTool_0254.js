/**
 * Generated Tool: blocksTool_0254
 * Domain: Blocks
 * ID: 0254
 */
exports.blocksTool_0254 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0254:', error);
    throw error;
  }
};
