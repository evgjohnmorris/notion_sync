/**
 * Generated Tool: blocksTool_0190
 * Domain: Blocks
 * ID: 0190
 */
exports.blocksTool_0190 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0190:', error);
    throw error;
  }
};
