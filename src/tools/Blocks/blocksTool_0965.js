/**
 * Generated Tool: blocksTool_0965
 * Domain: Blocks
 * ID: 0965
 */
exports.blocksTool_0965 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0965:', error);
    throw error;
  }
};
