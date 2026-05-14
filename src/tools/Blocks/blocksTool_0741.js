/**
 * Generated Tool: blocksTool_0741
 * Domain: Blocks
 * ID: 0741
 */
exports.blocksTool_0741 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0741:', error);
    throw error;
  }
};
