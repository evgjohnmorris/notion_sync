/**
 * Generated Tool: blocksTool_0783
 * Domain: Blocks
 * ID: 0783
 */
exports.blocksTool_0783 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0783:', error);
    throw error;
  }
};
