/**
 * Generated Tool: blocksTool_0890
 * Domain: Blocks
 * ID: 0890
 */
exports.blocksTool_0890 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0890:', error);
    throw error;
  }
};
