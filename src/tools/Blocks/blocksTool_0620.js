/**
 * Generated Tool: blocksTool_0620
 * Domain: Blocks
 * ID: 0620
 */
exports.blocksTool_0620 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0620:', error);
    throw error;
  }
};
