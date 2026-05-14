/**
 * Generated Tool: databasesTool_0632
 * Domain: Databases
 * ID: 0632
 */
exports.databasesTool_0632 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0632:', error);
    throw error;
  }
};
