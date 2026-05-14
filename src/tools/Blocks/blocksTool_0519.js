/**
 * Generated Tool: blocksTool_0519
 * Domain: Blocks
 * ID: 0519
 */
exports.blocksTool_0519 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0519:', error);
    throw error;
  }
};
