/**
 * Generated Tool: blocksTool_0775
 * Domain: Blocks
 * ID: 0775
 */
exports.blocksTool_0775 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0775:', error);
    throw error;
  }
};
