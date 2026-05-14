/**
 * Generated Tool: blocksTool_0856
 * Domain: Blocks
 * ID: 0856
 */
exports.blocksTool_0856 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0856:', error);
    throw error;
  }
};
