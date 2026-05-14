/**
 * Generated Tool: blocksTool_0588
 * Domain: Blocks
 * ID: 0588
 */
exports.blocksTool_0588 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0588:', error);
    throw error;
  }
};
