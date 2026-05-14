/**
 * Generated Tool: blocksTool_0172
 * Domain: Blocks
 * ID: 0172
 */
exports.blocksTool_0172 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0172:', error);
    throw error;
  }
};
