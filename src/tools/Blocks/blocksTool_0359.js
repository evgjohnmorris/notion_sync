/**
 * Generated Tool: blocksTool_0359
 * Domain: Blocks
 * ID: 0359
 */
exports.blocksTool_0359 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0359:', error);
    throw error;
  }
};
