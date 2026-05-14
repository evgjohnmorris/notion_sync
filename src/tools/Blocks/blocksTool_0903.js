/**
 * Generated Tool: blocksTool_0903
 * Domain: Blocks
 * ID: 0903
 */
exports.blocksTool_0903 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0903:', error);
    throw error;
  }
};
