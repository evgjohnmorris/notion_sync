/**
 * Generated Tool: blocksTool_0456
 * Domain: Blocks
 * ID: 0456
 */
exports.blocksTool_0456 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0456:', error);
    throw error;
  }
};
