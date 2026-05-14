/**
 * Generated Tool: blocksTool_0491
 * Domain: Blocks
 * ID: 0491
 */
exports.blocksTool_0491 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0491:', error);
    throw error;
  }
};
