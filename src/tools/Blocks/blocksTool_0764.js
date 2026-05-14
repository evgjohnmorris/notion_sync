/**
 * Generated Tool: blocksTool_0764
 * Domain: Blocks
 * ID: 0764
 */
exports.blocksTool_0764 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0764:', error);
    throw error;
  }
};
