/**
 * Generated Tool: blocksTool_0911
 * Domain: Blocks
 * ID: 0911
 */
exports.blocksTool_0911 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0911:', error);
    throw error;
  }
};
