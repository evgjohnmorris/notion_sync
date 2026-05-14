/**
 * Generated Tool: blocksTool_0244
 * Domain: Blocks
 * ID: 0244
 */
exports.blocksTool_0244 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0244:', error);
    throw error;
  }
};
