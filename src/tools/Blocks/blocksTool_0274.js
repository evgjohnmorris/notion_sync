/**
 * Generated Tool: blocksTool_0274
 * Domain: Blocks
 * ID: 0274
 */
exports.blocksTool_0274 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0274:', error);
    throw error;
  }
};
