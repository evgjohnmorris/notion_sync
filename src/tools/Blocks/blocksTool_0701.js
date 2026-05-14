/**
 * Generated Tool: blocksTool_0701
 * Domain: Blocks
 * ID: 0701
 */
exports.blocksTool_0701 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0701:', error);
    throw error;
  }
};
