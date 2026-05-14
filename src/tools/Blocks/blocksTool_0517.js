/**
 * Generated Tool: blocksTool_0517
 * Domain: Blocks
 * ID: 0517
 */
exports.blocksTool_0517 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0517:', error);
    throw error;
  }
};
