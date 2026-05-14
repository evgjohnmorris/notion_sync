/**
 * Generated Tool: blocksTool_0563
 * Domain: Blocks
 * ID: 0563
 */
exports.blocksTool_0563 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0563:', error);
    throw error;
  }
};
