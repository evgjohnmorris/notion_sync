/**
 * Generated Tool: blocksTool_0383
 * Domain: Blocks
 * ID: 0383
 */
exports.blocksTool_0383 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0383:', error);
    throw error;
  }
};
