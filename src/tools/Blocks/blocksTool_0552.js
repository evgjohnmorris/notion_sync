/**
 * Generated Tool: blocksTool_0552
 * Domain: Blocks
 * ID: 0552
 */
exports.blocksTool_0552 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0552:', error);
    throw error;
  }
};
