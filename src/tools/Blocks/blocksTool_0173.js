/**
 * Generated Tool: blocksTool_0173
 * Domain: Blocks
 * ID: 0173
 */
exports.blocksTool_0173 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0173:', error);
    throw error;
  }
};
