/**
 * Generated Tool: blocksTool_0603
 * Domain: Blocks
 * ID: 0603
 */
exports.blocksTool_0603 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0603:', error);
    throw error;
  }
};
