/**
 * Generated Tool: blocksTool_0227
 * Domain: Blocks
 * ID: 0227
 */
exports.blocksTool_0227 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0227:', error);
    throw error;
  }
};
