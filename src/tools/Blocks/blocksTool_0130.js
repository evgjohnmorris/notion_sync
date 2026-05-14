/**
 * Generated Tool: blocksTool_0130
 * Domain: Blocks
 * ID: 0130
 */
exports.blocksTool_0130 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0130:', error);
    throw error;
  }
};
