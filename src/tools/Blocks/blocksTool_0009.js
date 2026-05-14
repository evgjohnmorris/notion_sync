/**
 * Generated Tool: blocksTool_0009
 * Domain: Blocks
 * ID: 0009
 */
exports.blocksTool_0009 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0009:', error);
    throw error;
  }
};
