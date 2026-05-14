/**
 * Generated Tool: blocksTool_0544
 * Domain: Blocks
 * ID: 0544
 */
exports.blocksTool_0544 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0544:', error);
    throw error;
  }
};
