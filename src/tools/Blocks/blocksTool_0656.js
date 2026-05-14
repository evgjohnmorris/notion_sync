/**
 * Generated Tool: blocksTool_0656
 * Domain: Blocks
 * ID: 0656
 */
exports.blocksTool_0656 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0656:', error);
    throw error;
  }
};
