/**
 * Generated Tool: blocksTool_0398
 * Domain: Blocks
 * ID: 0398
 */
exports.blocksTool_0398 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0398:', error);
    throw error;
  }
};
