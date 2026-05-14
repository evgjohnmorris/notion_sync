/**
 * Generated Tool: blocksTool_0884
 * Domain: Blocks
 * ID: 0884
 */
exports.blocksTool_0884 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0884:', error);
    throw error;
  }
};
