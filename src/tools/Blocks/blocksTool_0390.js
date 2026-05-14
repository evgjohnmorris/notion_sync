/**
 * Generated Tool: blocksTool_0390
 * Domain: Blocks
 * ID: 0390
 */
exports.blocksTool_0390 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0390:', error);
    throw error;
  }
};
