/**
 * Generated Tool: blocksTool_0985
 * Domain: Blocks
 * ID: 0985
 */
exports.blocksTool_0985 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0985:', error);
    throw error;
  }
};
