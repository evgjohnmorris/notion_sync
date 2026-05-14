/**
 * Generated Tool: blocksTool_0076
 * Domain: Blocks
 * ID: 0076
 */
exports.blocksTool_0076 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0076:', error);
    throw error;
  }
};
