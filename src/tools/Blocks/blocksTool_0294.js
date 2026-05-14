/**
 * Generated Tool: blocksTool_0294
 * Domain: Blocks
 * ID: 0294
 */
exports.blocksTool_0294 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0294:', error);
    throw error;
  }
};
