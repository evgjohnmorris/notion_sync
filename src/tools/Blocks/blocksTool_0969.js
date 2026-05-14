/**
 * Generated Tool: blocksTool_0969
 * Domain: Blocks
 * ID: 0969
 */
exports.blocksTool_0969 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0969:', error);
    throw error;
  }
};
